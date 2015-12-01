var _ = require('lodash');


var validate = function(obj, form_rules) {
  var is_valid = true;
  var error = null;

  _.forEach(form_rules, function(input_rules, key) {
    _.forEach(input_rules, function(rule) {
      var rule_error = validateRule(key, rule, obj);
      if (rule_error) {
        error = rule_error;
        return false; // Break
      }
    });
    if (error) {
      return false; // Break
    }
  });

  return !error ? false : error;
};

var validateRule = function(key, rule, obj) {
  var rule_options = rule.split("|");
  var rule_name = rule_options.shift();
  var rule_error =  Rules[rule_name] ? Rules[rule_name](key, obj, rule_options) : 'Rule `' + rule_name + '` not found';
  if (rule_error) {
    return {
      message: rule_error,
      key: key
    };
  }
  else {
    return false
  }
}

var Rules = {
  required: function(key, obj) {
    return (obj && obj[key]) ? false : key + ' is required';
  },
  length: function(key, obj, rule_otions) {
    var value = obj && obj[key] || null;
    var min = rule_otions && (rule_otions[0] || rule_otions[0] === 0) ? rule_otions[0] : null;
    var max = rule_otions && (rule_otions[1] || rule_otions[1] === 0) ? rule_otions[1] : null;

    if (min && value.length < min) {
      return key + ' is to short. Min ' + min;
    }
    if (max && value.length > max) {
      return key + ' is to long. Max ' + max;
    }
    return false;
  },
  contain: function(key, obj, rule_options) {
    var value = obj && obj[key] || null;
    var error = false;
    _.forEach(rule_options || [], function(opt_value) {
      if(!value.match(opt_value)) {
        error = key + ' should contain ' + opt_value;
        return false;
      }
    });
    return error;
  },
  notContainValue: function(key, obj, rule_otions) {
    var value = obj && obj[key] || null;
    var error = false;

    _.forEach(rule_otions, function(opt_value) {
      var not_contain_value = obj && obj[opt_value];
      if (not_contain_value && value.indexOf(not_contain_value) !== -1) {
        error = key + ' must not contain the value of ' + opt_value;
        return false;
      }
    });
    return error;
  }
}



module.exports = validate;
var Promise = require("bluebird");
var Sealious = require("sealious");
var field_type_category = new Sealious.ChipTypes.FieldType("category");

    field_type_category.prototype.isProperValue = function(context, category) {
        return new Promise(function(resolve, reject) {
            var categories = ["None", "Finanse", "Gastronomia", "Handel i usługi", "Motoryzacja", "Nauka i edukacja", "Praca", "Religia", "Rozrywka", "Kultura", "Sport i rekreacja", "Turystyka", "Zdrowie i uroda"];


            if (categories.indexOf(category) > -1) {
                resolve();
            } else {
                reject("`"+category+"`" + " is not right category.");
            }

        })
    }

    field_type_category.prototype.encode = function(context, category) {
        return new Promise(function(resolve, reject) {
            resolve(category);
        })
    }
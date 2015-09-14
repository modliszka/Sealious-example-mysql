var Promise = require("bluebird");
var Sealious = require("sealious");
var field_type_subcategory = new Sealious.ChipTypes.FieldType("subcategory");

    field_type_subcategory.prototype.isProperValue = function(context, subcategory) {
        return new Promise(function(resolve, reject) {
            var subcategories = ["Apteki", "Banki", "Bankomaty", "Bary i puby", "Baseny", "Biblioteki", "Biurowce", "Cmentarze", "Cukiernie i piekarnie", "Fabryki", "Fast foody", "Festiwale", "Firmy", "Gabinety kosmetyczne", "Hotele i hostele", "Kantory", "Kapliczki", "Kawiarnie", "Kina", "Kluby", "Kluby fitness", "Kręgielnie", "Lekarze ", "Lodowiska", "Muzea", "Myjnie", "None", "Opera", "Parki", "Pizzerie", "Pomniki", "Przychodnie", "Restauracje", "Salony fryzjerskie", "Sanatoria", "Serwisy", "Sklepy inne", "Sklepy spożywcze", "Stacje paliw", "Stadiony", "Szkoły", "Szpitale", "Targi", "Teatr", "Warsztaty", "Zabytki", "Zoo", "Ładne widoki", "Świątynie"];

            if (subcategories.indexOf(subcategory) > -1) {
                resolve();
            } else {
                reject("`"+subcategory+"`" + " is not right subcategory.");
            }

        })
    }

    field_type_subcategory.prototype.encode = function(context, subcategory) {
        return new Promise(function(resolve, reject) {
            resolve(subcategory);
        })
    }
var mongoose = require('mongoose');
// Setup schema
var contactsSchema = mongoose.Schema({


    name: String,
    calories: Number,
    fat: Number,
    carbs: Number,
    protein: Number,
    
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Contact = module.exports = mongoose.model('myData', contactsSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}
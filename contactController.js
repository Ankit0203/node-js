// Import contact model
Contact = require('./contactModel');
Contacts = require('./contactModels');

// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};
// Handle create contact actions


exports.new = function (req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.food = req.body.food;
    contact.email = req.body.email;
    contact.checked = req.body.checked;
// save the contact and check for errors
    contact.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.food = req.body.food;
        contact.email = req.body.email;
        contact.checked = req.body.checked;
// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};


exports.newContact = function (req, res) {
    var contacts = new Contacts();
    contacts.name = req.body.name ? req.body.name : contacts.name;
    contacts.calories = req.body.calories;
    contacts.fat = req.body.fat;
    contacts.carbs = req.body.carbs;
    contacts.protein = req.body.protein;

// save the contact and check for errors
contacts.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New contact created!',
            data: contacts
        });
    });
};

exports.getContact = function (req, res) {
    Contacts.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};

exports.deleteContact = function (req, res) {
    console.log(req.params.id)
    Contacts.remove({
        _id: req.params.id
        
    }, function (err) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};


exports.updateData = function (req, res) {
    console.log('My id is ===',  req.params.id);
    console.log('My data is ===',  req.params.id);

    Contacts.findById(req.params.id, function (err, contacts) {
            if (err)
                res.send(err);
                contacts.name = req.body.name ? req.body.name : contacts.name;
                contacts.calories = req.body.calories;
                contacts.fat = req.body.fat;
                contacts.carbs = req.body.carbs;
                contacts.protein = req.body.protein;
    // save the contact and check for errors
            contacts.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'Contact Info updated',
                    data: contacts
                });
            });
        });
    };
    
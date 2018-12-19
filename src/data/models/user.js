const mongoose = require('mongoose');
const bluebird = require('bluebird');
const bcrypt = bluebird.promisifyAll(require('bcrypt'));

const uniqueValidator = require('mongoose-unique-validator');

let UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    // TODO
    // profilePicture: { type: mongoose.SchemaType.ObjectId, ref: 'Photo' },
    createdRecipes: { type: [mongoose.SchemaType.ObjectId], ref: ''}
});

UserSchema.pre('save', async function() {
    if (!this.isModified('password') || !this.isNew) return;
    const salt = await bcrypt.genSaltAsync(10);
    const hash = await bcrypt.hash(this.password, salt, null);
    this.password = hash;
})

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.plugin(uniqueValidator, { message: "must be unique" });

module.exports = UserSchema;
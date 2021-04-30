const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({ 
    _id: mongoose.Schema.Types.ObjectId,
    plot:{ type: String, required: true},
    genre:{ type: Array, required: true},
    runtime:{ type: Number, required: true},
    rated:{ type: String, required: true},
    cast:{ type: Array, required: true},
    posters:{ type: String, required: true},
    title:{ type:String, required: true},
    fullplot:{ type:String, required: true},
    countries:{ type:Array, required: true},
    released:{ type: Number , required: true},
    directors:{ type:Array, required: true},
    writers:{ type:Array, required: true},
    awards:{type:Object, required: true},
    year:{ type: Number, required: true},
    type:{ type:String, required : true},

})

module.exports = mongoose.model("movies", movieSchema)
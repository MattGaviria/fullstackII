const mongoose = require("mongoose");

const cityRegex = /^[A-Za-z ]+$/;            
const zipRegex = /^\d{5}-\d{4}$/;            
const phoneRegex = /^\d-\d{3}-\d{3}-\d{4}$/; 

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },

    username: {
      type: String,
      required: [true, "username is required"],
      minlength: [4, "username must be at least 4 characters"],
      maxlength: [100, "username must be at most 100 characters"],
    },

    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "email must be a valid email address"],
    },

    address: {
      street: {
        type: String,
        required: [true, "address.street is required"],
      },
      suite: {
        type: String,
        required: [true, "address.suite is required"],
      },
      city: {
        type: String,
        required: [true, "address.city is required"],
        validate: {
          validator: (v) => cityRegex.test(v),
          message: "address.city must contain only alphabets and spaces",
        },
      },
      zipcode: {
        type: String,
        required: [true, "address.zipcode is required"],
        validate: {
          validator: (v) => zipRegex.test(v),
          message: "address.zipcode must match format 12345-1234",
        },
      },
      geo: {
        lat: {
          type: String,
          required: [true, "address.geo.lat is required"],
        },
        lng: {
          type: String,
          required: [true, "address.geo.lng is required"],
        },
      },
    },

    phone: {
      type: String,
      required: [true, "phone is required"],
      validate: {
        validator: (v) => phoneRegex.test(v),
        message: "phone must match format 1-123-123-1234",
      },
    },

    website: {
      type: String,
      required: [true, "website is required"],
      validate: {
        validator: (v) => /^https?:\/\/.+/i.test(v),
        message: "website must be a valid URL starting with http or https",
      },
    },

    company: {
      name: {
        type: String,
        required: [true, "company.name is required"],
      },
      catchPhrase: {
        type: String,
        required: [true, "company.catchPhrase is required"],
      },
      bs: {
        type: String,
        required: [true, "company.bs is required"],
      },
    },
  },
  { timestamps: true }
);



module.exports = mongoose.model("User", userSchema);

import mongoose from "mongoose"

const supplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    email: String,
    phone: String,
    address: String,
    contactPerson: String,
    status: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model("Supplier", supplierSchema)

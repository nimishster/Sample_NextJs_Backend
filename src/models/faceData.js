import mongoose,{Schema} from "mongoose";

const faceSchema=new Schema(
    {
        stu_email: String,
        stu_emb: [Number],
    },
    {
        timestamps:true
    }
);

const Facevalue=mongoose.models.Facevalue || mongoose.model("Facevalue",faceSchema);

export default Facevalue;
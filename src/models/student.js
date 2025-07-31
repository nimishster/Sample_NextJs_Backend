import mongoose,{Schema} from "mongoose";

const studentSchema=new Schema(
    {
        stu_name: String,
        city:String,
        marks:Number,
    },
    {
        timestamps:true
    }
);

const Student=mongoose.models.Student || mongoose.model("Student",studentSchema);

export default Student;
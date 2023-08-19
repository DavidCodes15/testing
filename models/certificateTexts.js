import { Schema, model, models } from "mongoose";

const certificateTextSchema = new Schema({
    firstCertText: {
        type: String,
        required: [true, "it is true"],
    },
    secondCertText: {
        type: String,
        required: [true, "it is true"],
    },
    firstEngCertText: {
        type: String,
        required: [true, "it is true"],
    },
    secondEngCertText: {
        type: String,
        required: [true, "it is true"],
    },
    firstRusCertText: {
        type: String,
        required: [true, "it is true"],
    },
    secondRusCertText: {
        type: String,
        required: [true, "it is true"],
    },
});
const certificateText = models.certificateText || model("certificateText", certificateTextSchema);

export default certificateText;
const Groq = require('groq-sdk');
const groq  = new Groq({apiKey:"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"});
exports.getChatResp = async(req,res,next) =>{
    try{
        const {message} = req.body;//user input from request body is accessed
        if(!message) {
            return res.status(400).json({status:'fail',message:'please enter the query'});
        }
        const chatCompletion = await groq.chat.completions.create({
            messages:[{role:"user",content:message}],
            model:"llama-3.3-70b-versatile"
        });
        const responseText = chatCompletion.choices[0]?.message?.content || "no query generated";
        res.status(200).json({status:'success',response:responseText});
    }
    catch(error) {
        console.log("error encountered",error);
        res.status(500).json({status:'fail',error:'internal server error'});
    }
}

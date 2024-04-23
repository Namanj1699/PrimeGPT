import OpenAI from 'openai';
import {OPENAI_KEY} from '../utils/constant/Constant'

const Openai = new OpenAI({
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser : true,
})

export default Openai;




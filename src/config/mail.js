import { formatRelativeWithOptions } from "date-fns/fp";

export default {
    host:process.env.MAIL_HOST,
    port:process.env.MAIL_PORT,
    secure: false,
    auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS,
    },
    default: {
        from: 'Igor Nunes <leandro@next4.com.br>',
    },
};
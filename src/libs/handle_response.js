export function Response(handle) {
    return async (req, res, next) => {
        try {
            let data = await handle(req, res, next);
            if (data && data.header) {
                for (let i = 0; i < data.header.length; i++) {
                    res.setHeader(data.header[i].name, data.header[i].content);
                }

                return res.end(data.buffer);
            } else {
                return res.send({
                    signal: 1,
                    message: 'SUCCESS',
                    code: 200,
                    data: data
                });
            }
<<<<<<< HEAD
            
=======

>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
        } catch (err) {
            let message = err.message
            return res.send({
                signal: 0,
                code: 400,
                message
            });
        }
    };
}
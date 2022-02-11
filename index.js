const express = reqiure('express');
const morgan = reqiure('morgan');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));

app.use('/', home);
app.use('/listproducts', listproducts);
app.use('/users', users);
app.use('/orders', orders);
app.use('/contact', contact);
app.listen(port, ( err ) =>
{
    if(err)
        console.log(err);
    else
        console.log('app run in port '+ port);
});

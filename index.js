app.post("/api/dscate", function(req, res){
    Category.aggregate([
        { $match : {  } },
        {$lookup: {            
            from: 'books', 
            localField: 'Books_id',
            foreignField: '_id',
            as: 'danhsach'
        }
    }], function(err, item){
        if(err){
            res.json({"kq":0, "err": err});
        }else{
            res.json(item);
        }
    });
});

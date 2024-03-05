

exports.filterBody = async (body,fields) => {
  try{
    const filteredBody = {};
    fields.forEach(field => {
      if(Object.prototype.hasOwnProperty.call(body,field)){
        filteredBody[field] = body[field]
      }
    })
    return filteredBody
  }catch(error){
    return error
  }
}
function status(request, response) {
  response.status(200).json({
    chave: "jonathan é gay d+",
  });
}

export default status;

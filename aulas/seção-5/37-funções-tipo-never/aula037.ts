function showErrorMessage(msg: string): never {
  throw new Error(msg);
}

showErrorMessage("Algum erro!");

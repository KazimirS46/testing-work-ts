function validateForm(name, email, phone, address) {
  if (Boolean(name) && Boolean(email) && Boolean(phone) && Boolean(address)) {
    return true;
  } else {
    return false;
  }
}

export default validateForm;

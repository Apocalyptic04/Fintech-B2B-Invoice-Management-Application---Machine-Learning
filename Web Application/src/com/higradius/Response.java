package com.higradius;

public class Response {
String customer_name;
String customer_no;
String invoice_id;
String invoice_amount;
String due_date;
String predicted_payment_date;
String notes;
public String getCustomer_name() {
	return customer_name;
}
public void setCustomer_name(String customer_name) {
	this.customer_name = customer_name;
}
public String getCustomer_no() {
	return customer_no;
}
public void setCustomer_no(String customer_no) {
	this.customer_no = customer_no;
}
public String getInvoice_id() {
	return invoice_id;
}
public void setInvoice_id(String invoice_id) {
	this.invoice_id = invoice_id;
}
public String getInvoice_amount() {
	return invoice_amount;
}
public void setInvoice_amount(String invoice_amount) {
	this.invoice_amount = invoice_amount;
}
public String getDue_date() {
	return due_date;
}
public void setDue_date(String due_date) {
	this.due_date = due_date;
}
public String getPredicted_payment_date() {
	return predicted_payment_date;
}
public void setPredicted_payment_date(String predicted_payment_date) {
	this.predicted_payment_date = predicted_payment_date;
}
public String getNotes() {
	return notes;
}
public void setNotes(String notes) {
	this.notes = notes;
}


}

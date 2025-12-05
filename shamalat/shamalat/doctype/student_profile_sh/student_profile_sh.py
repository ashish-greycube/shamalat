# Copyright (c) 2025, GreyCube Technologies and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc

@frappe.whitelist()
def create_student_result_details(source_name, target_doc=None):
	def set_missing_values(source, target):
		target.student_ref = source.name
		target.student_season_ref = frappe.flags.args.season_ref

	doc = get_mapped_doc(
		"Student Profile SH",
		source_name,
		{
			"Student Profile SH" : {
				"doctype" : "Student Season Result SH",
				"field_map" : {
					"college_name" : "college"
				}
			}
		},
		target_doc,
		set_missing_values
	)
	return doc

class StudentProfileSH(Document):
	def onload(self):
		self.collect_and_set_student_season_data()

	@frappe.whitelist()
	def collect_and_set_student_season_data(self):
		season_results = frappe.get_all("Student Season Result SH",
			filters={"student_ref": self.name, "docstatus" : 1},
			fields=["name", "student_season_ref", "total_approved_hours", "total_gained_hours", "total_result", "total_points"]
		)
		for result in season_results:
			result_data = []
			result_data.append(result.student_season_ref)
			result_data.append(result.total_approved_hours)
			result_data.append(result.total_gained_hours)
			result_data.append(result.total_result)
			result_data.append(result.total_points)

			if len(result_data) > 0:
				template_path = "templates/student_season_details.html"
				html = frappe.render_template(template_path,  dict(data=result_data))  
				self.set_onload(result.student_season_ref, html) 
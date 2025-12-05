# Copyright (c) 2025, GreyCube Technologies and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class StudentSeasonResultSH(Document):
	def validate(self):
		self.calculate_total_fields_of_result()

	def calculate_total_fields_of_result(self):
		if len(self.course_details) > 0:
			total_courses = len(self.course_details)
			total_approved_hours = 0
			total_gained_hours = 0
			total_result = 0
			total_points = 0
			for course in self.course_details: 
				total_approved_hours = total_approved_hours + course.approved_hours
				total_gained_hours = total_gained_hours + course.gained_hours
				total_result = total_result + course.result
				total_points = total_points + course.points

			self.total_approved_hours = total_approved_hours
			self.total_gained_hours = total_gained_hours
			self.total_result = total_result / total_courses
			self.total_points = round(total_points / total_courses, 1)
// Copyright (c) 2025, GreyCube Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Student Season Result SH', {
	setup: function (frm) {
		frm.set_query("course_code", "course_details", function (frm) {
			return {
				filters: {
					"college": cur_frm.doc.college
				}
			}
		})
	}
});

frappe.ui.form.on('Season Wise Course Details SH', {
	gained_hours: function (frm, cdt, cdn) {
		let row = locals[cdt][cdn];
		if (row.gained_hours > row.approved_hours) {
			frappe.throw(__("Gained Hours Can Not Be Greater Than Approved Hours"))
		}
	},

	result: function (frm, cdt, cdn) {
		let row = locals[cdt][cdn];
		if (row.result >= 0 && row.result <= 49) {
			row.grade = "Fail"
			frm.refresh_fields('grade');
		}
		else if (row.result >= 50 && row.result <= 59) {
			row.grade = "Pass"
			frm.refresh_fields('grade');
		}
		else if (row.result >= 60 && row.result <= 69) {
			row.grade = "Good"
			frm.refresh_fields('grade');
		}
		else if (row.result >= 70 && row.result <= 79) {
			row.grade = "Very Good"
			frm.refresh_fields('grade');
		}
		else if (row.result >= 80 && row.result <= 100) {
			row.grade = "Excellent"
			frm.refresh_fields('grade');
		}

		row.points = (4 / 100) * row.result
		frm.refresh_fields("points");
	}
})
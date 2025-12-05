// Copyright (c) 2025, GreyCube Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Student Profile SH', {
	add_info_one: (frm) => open_student_result_details(frm, "season_1"),
	add_info_two: (frm) => open_student_result_details(frm, "season_2"),
	add_info_three: (frm) => open_student_result_details(frm, "season_3"),
	add_info_four: (frm) => open_student_result_details(frm, "season_4"),
	add_info_five: (frm) => open_student_result_details(frm, "season_5"),
	add_info_six: (frm) => open_student_result_details(frm, "season_6"),
	add_info_seven: (frm) => open_student_result_details(frm, "season_7"),
	add_info_eight: (frm) => open_student_result_details(frm, "season_8"),
	add_info_nine: (frm) => open_student_result_details(frm, "season_9"),
	add_info_ten: (frm) => open_student_result_details(frm, "season_10"),
	add_info_eleven: (frm) => open_student_result_details(frm, "season_11"),
	add_info_twelve: (frm) => open_student_result_details(frm, "season_12"),

	refresh: function (frm) {
		frm.call({
			method: "collect_and_set_student_season_data",
			doc: frm.doc,
			callback: function (res) {
				draw_season_details(frm);
			}
		})
	},

	onload: function (frm) {
		draw_season_details(frm);
	},

	onload_post_render: function (frm) {
		draw_season_details(frm);
	},

	setup: function (frm) {
		draw_season_details(frm);
	}
});

function open_student_result_details(frm, season) {
	if (frm.is_dirty()) {
		frappe.throw(__('Please save the document before proceeding.'));
	}
	frappe.model.open_mapped_doc({
		method: "shamalat.shamalat.doctype.student_profile_sh.student_profile_sh.create_student_result_details",
		frm: cur_frm,
		args: {
			"season_ref": season
		}
	});
}

function draw_season_details(frm) {
	console.log("Called", frm.doc.__onload)
	if (frm.is_new() == undefined && frm.doc.__onload) {
		if ("season_1" in frm.doc.__onload) {
			frm.set_df_property('season_1', 'options', frm.doc.__onload.season_1)
			frm.refresh_field('season_1')
			frm.set_df_property('add_info_one', 'hidden', true)
		}
		if ("season_2" in frm.doc.__onload) {
			frm.set_df_property('season_2', 'options', frm.doc.__onload.season_2)
			frm.refresh_field('season_2')
			frm.set_df_property('add_info_two', 'hidden', true)
		}
		if ("season_3" in frm.doc.__onload) {
			frm.set_df_property('season_3', 'options', frm.doc.__onload.season_3)
			frm.refresh_field('season_3')
			frm.set_df_property('add_info_three', 'hidden', true)
		}
		if ("season_4" in frm.doc.__onload) {
			frm.set_df_property('season_4', 'options', frm.doc.__onload.season_4)
			frm.refresh_field('season_4')
			frm.set_df_property('add_info_four', 'hidden', true)
		}
		if ("season_5" in frm.doc.__onload) {
			console.log("Yes It Is")
			frm.set_df_property('season_5', 'options', frm.doc.__onload.season_5)
			frm.refresh_field('season_5')
			frm.set_df_property('add_info_five', 'hidden', true)
		}
		if ("season_6" in frm.doc.__onload) {
			frm.set_df_property('season_6', 'options', frm.doc.__onload.season_6)
			frm.refresh_field('season_6')
			frm.set_df_property('add_info_six', 'hidden', true)
		}
		if ("season_7" in frm.doc.__onload) {
			frm.set_df_property('season_7', 'options', frm.doc.__onload.season_7)
			frm.refresh_field('season_7')
			frm.set_df_property('add_info_seven', 'hidden', true)
		}
		if ("season_8" in frm.doc.__onload) {
			frm.set_df_property('season_8', 'options', frm.doc.__onload.season_8)
			frm.refresh_field('season_8')
			frm.set_df_property('add_info_eight', 'hidden', true)
		}
		if ("season_9" in frm.doc.__onload) {
			frm.set_df_property('season_9', 'options', frm.doc.__onload.season_9)
			frm.refresh_field('season_9')
			frm.set_df_property('add_info_nine', 'hidden', true)
		}
		if ("season_10" in frm.doc.__onload) {
			frm.set_df_property('season_10', 'options', frm.doc.__onload.season_10)
			frm.refresh_field('season_10')
			frm.set_df_property('add_info_ten', 'hidden', true)
		}
		if ("season_11" in frm.doc.__onload) {
			frm.set_df_property('season_11', 'options', frm.doc.__onload.season_11)
			frm.refresh_field('season_11')
			frm.set_df_property('add_info_eleven', 'hidden', true)
		}
		if ("season_12" in frm.doc.__onload) {
			frm.set_df_property('season_12', 'options', frm.doc.__onload.season_12)
			frm.refresh_field('season_12')
			frm.set_df_property('add_info_twelve', 'hidden', true)
		}
	}
}
var bio = {
	'name':'Stephanie Picard',
	'role' : 'Manufacturing Leader',
	'contacts' : {
		'mobile' : '859-537-6998',
		'email' : 'stephanie.picard777@gmail.com',
		'github' : 'pcrdstphn',
		'location' : 'Lake George, NY'
		},
	'biopic' : 'images/stephpicture.jpg',
	'welcome' : 'Thanks for visiting my webResume!',
	'skills' : ['Aspiring Front End Web Developer', ' Manufacturing Excellence', ' Continuous Improvement', 
		' Process Engineering', ' Six Sigma with Quality Assurance'],
	displayBio : function(){
		var formattedname = HTMLheaderName.replace('%data%', bio.name);
		var formattedrole = HTMLheaderRole.replace('%data%', bio.role);
		$('#header').prepend(formattedname, formattedrole);
		var formattedmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedemail = HTMLemail.replace('%data%', bio.contacts.email);
		var formattedgithub = HTMLgithub.replace('%data%', bio.contacts.github);
		var formattedlocation = HTMLlocation.replace('%data%', bio.contacts.location);
		$('#topContacts').append(formattedmobile,formattedemail,formattedgithub,formattedlocation);
		$('#footerContacts').append(formattedmobile,formattedemail,formattedgithub,formattedlocation);
		var formattedbioPic = HTMLbioPic.replace('%data%', bio.biopic);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcome);
		$('#header').append(formattedbioPic, formattedwelcomeMsg);
		$('#header').append(HTMLskillsStart);
		var formattedskills = HTMLskills.replace('%data%', bio.skills);
		$('#skills').append(formattedskills);
	}
}

bio.displayBio();

var work = {
	'jobs' : [
		{
			'employer' : 'Directed Action Professional Associates',
			'worktitle' : 'Consultant',
			'location' : 'Lake George, NY',
			'workdates' : 'Nov 2015 to Present',
			'workdescription': 'TroubleShooting Training with a focus on Manufacturing Excellence'
		},
		{	
			'employer' : 'Finch Paper LLC',
			'worktitle' : 'Mill Manager',
			'location' : 'Glens Falls, NY',
			'workdates' : 'Aug 2013 to Nov 2015',
			'workdescription' : 'Led an integrated Fine Paper papermill with 450 direct reports'
		},
		{
			'employer' : 'Georgia Pacific LLC',
			'worktitle' : 'Plant Manager',
			'location' : 'Lexington, KY',
			'workdates' : 'Oct 2008 to Aug 2013',
			'workdescription' : 'Led a papercup converting and plastics thermoforming plant with 310 direct reports'
		},
		{
			'employer' : 'Georgia Pacific LLC',
			'worktitle' : 'Senior Director of Quality',
			'location' : 'Atlanta, GA',
			'workdates' : 'Jan 2007 to Oct 2008',
			'workdescription': 'Led the Quality Function for all 11 Consumer Products mills in North America'
		},
		{
			'employer' : 'Georgia Pacific LLC',
			'worktitle' : 'Continuous Improvement Manager',
			'location' : 'Port Hudson, LA',
			'workdates' : 'Oct 2003 to Aug 2004',
			'workdescription' : 'Led CI for the Port Hudson Papermill'
		},
		{
			'employer' : 'Georgia Pacific LLC',
			'worktitle' : 'Papermachine Startup Technical Superintendent',
			'location' : 'Port Hudson, LA',
			'workdates' : 'June 2002 to Oct 2003',
			'workdescription' : 'Led the technical build and startup of No. 6 Papermachine'
		},
		{
			'employer' : 'International Paper',
			'worktitle' : 'Mill Manager',
			'location' : 'Vicksburg, MS',
			'workdates' : 'Mar 2005 to Jan 2007',
			'workdescription' : 'Led an integrated Linerboard papermill with 315 direct reports'
		},
		{
			'employer' : 'International Paper',
			'worktitle' : 'Global Manufacturing Excellence Manager',
			'location' : 'Loveland, OH',
			'workdates' : 'Aug 2004 to Mar 2005',
			'workdescription' : 'Led the Manufacturing Excellence function for 18 mills globally'
		},
		{
			'employer' : 'Potlatch Corp (Now Clearwater Paper)',
			'worktitle' : 'Director of Marketing',
			'location' : 'Lewiston, ID',
			'workdates' : 'Mar 1998 to Jun 2002',
			'workdescription': 'Led the Marketing function for the private lable tissue and bleached board businesses'
		},
		{
			'employer' : 'Procter and Gamble',
			'worktitle' : 'Papermaking Operations Manager',
			'location' : 'Oxnard, CA',
			'workdates' : 'Jan 1996 to Mar 1998',
			'workdescription' : 'Led a two papermachine operation with 49 direct reports'
		},
		{
			'employer' : 'Procter and Gamble',
			'worktitle' : 'Pulp Prep Operations Manager',
			'location' : 'Oxnard, CA',
			'workdates' : 'May 1994 to Jan 1996',
			'workdescription': 'Led the raw materials operation with 25 direct reports'
		},
		{
			'employer' : 'Procter and Gamble',
			'worktitle' : 'Human Resources Manager',
			'location' : 'Mehoopany, PA',
			'workdates' : 'Sep 1992 to May 1994',
			'workdescription' : 'Led the HR function for a six papermachine department including redesigning the High Performance Work System'
		},
		{
			'employer' : 'Procter and Gamble',
			'worktitle' : 'Papermachine Manager',
			'location' : 'Mehoopany,PA',
			'workdates' : 'Jan 1990 to Sep 1992',
			'workdescription' : 'Led the PM6 operation with 24 direct reports'
		},
		{
			'employer' : 'Procter and Gamble',
			'worktitle' : 'Pulpmill Industrial Engineer',
			'location' : 'Mehoopany,PA',
			'workdates' : 'May 1988 to Jan 1990',
			'workdescription' : 'Led financial analysis for the pulpmill and spearheaded the Sulfite business team'	
		},
		{
			'employer' : 'Procter and Gamble',
			'worktitle' : 'Papermachine Process Engineer',
			'location' : 'Mehoopany,PA',
			'workdates' : 'May 1986 to May 1988',
			'workdescription' : 'Led product and process improvements on PM4'	
		}
		],
	displayWork : function(){
		work.jobs.forEach(function(job) {
		$('#workExperience').append(HTMLworkStart);
		var formattedemployer = HTMLworkEmployer.replace('%data%', job.employer);
		var formattedtitle = HTMLworkTitle.replace('%data%', job.worktitle);
		var formattedEmployerTitle = formattedemployer+' '+formattedtitle;
		var formattedworkLocation = HTMLworkLocation.replace('%data%', job.location);
		var formattedworkDates = HTMLworkDates.replace('%data%', job.workdates);
		var formattedworkDescription = HTMLworkDescription.replace('%data%', job.workdescription);
		$('.work-entry:last').append(formattedEmployerTitle, formattedworkLocation, formattedworkDates, formattedworkDescription);	
		});
	}	
}


work.displayWork();

var projects = {
	'examples' :[
		{
			'projecttitle':'A Website of My Favorite Movies',
			'projectdates': 'Feb 2016',
			'projectdescription': 'This is the Introduction to Programming Nanodegree Stage 3 Project',
			'projectimage':'images/moviewebsite.jpg'
		},
		{
			'projecttitle':'A Website of My Introduction to Programming Nanodegree Notes',
			'projectdates' : 'Nov 2015',
			'projectdescription' : 'A website capturing my learning and notes for IPND Stage 1',
			'projectimage' : 'images/ipndnoteswebsite.jpg'
		}
		],	
	displayProjects : function() {
		projects.examples.forEach(function(project) {
			$('#projects').append(HTMLprojectStart);
			var formattedprojectTitle = HTMLprojectTitle.replace('%data%',project.projecttitle);
			var formattedprojectDates = HTMLprojectDates.replace('%data%',project.projectdates);
			var formattedprojectDescription = HTMLprojectDescription.replace('%data%',project.projectdescription);	
			var formattedprojectImage = HTMLprojectImage.replace('%data%',project.projectimage);
			$('.project-entry:last').append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription,formattedprojectImage);
		});
	}	
}

projects.displayProjects();

var education = {
	'schools':[
		{
			'schoolname' : 'University of Michigan',
			'schooldegree' : 'Executive Education Center',
			'schooldates' : '1999',
			'location' : 'Ann Arbor, MI',
			'schoolmajor' : 'Strategic Marketing Planning'
		},
		{
			'schoolname' : 'University of Maine',
			'schooldegree' : 'Bachelor of Science',
			'schooldates' : '1982 to 1986',
			'location' : 'Orono, ME',
			'schoolmajor' : 'Chemical Engineering'
		}
		],
	'onlineclasses' : [
		{
			'onlinetitle' : 'Intro to Programming Nanodegree',
			'onlineschool' : 'Udacity',
			'onlinedates' : 'Oct 2015 to Present',
			'onlineurl' : "https://www.udacity.com"	
		}
		],
	displayEducation : function() {
		education.schools.forEach(function(school)	{
			$('#education').append(HTMLschoolStart);
			var formattedschoolName = HTMLschoolName.replace('%data%', school.schoolname);
			var formattedschoolDegree = HTMLschoolDegree.replace('%data%', school.schooldegree);
			var formattedschoolDates = HTMLschoolDates.replace('%data%', school.schooldates);
			var formattedlocation = HTMLschoolLocation.replace('%data%', school.location);
			var formattedschoolMajor = HTMLschoolMajor.replace('%data%', school.schoolmajor);
			$('.education-entry:last').append(formattedschoolName,formattedschoolDegree, formattedschoolDates, formattedlocation, formattedschoolMajor);
			});
		$('#education').append(HTMLonlineClasses);
		education.onlineclasses.forEach(function(onlineclass) {
			$('#education').append(HTMLschoolStart);
			var formattedonlineTitle = HTMLonlineTitle.replace('%data%', onlineclass.onlinetitle);
			var formattedonlineSchool = HTMLonlineSchool.replace('%data%', onlineclass.onlineschool);
			var formattedonlineDates = HTMLonlineDates.replace('%data%', onlineclass.onlinedates);
			var formattedonlineURL = HTMLonlineURL.replace('%data%', onlineclass.onlineurl);
			$('.education-entry:last').append(formattedonlineTitle,formattedonlineSchool,formattedonlineDates, formattedonlineURL);
			});
		}		
}

education.displayEducation();

$('#main').append(internationalizeButton);

var split_name = bio.name.split(' ');

function inName() {
	var lastName = split_name[1];
    var lastNameCaps = lastName.toUpperCase();
    var firstName = split_name[0];
    var firstNameLower = firstName.toLowerCase();
    var firstNameFirst = firstNameLower.charAt(0).toUpperCase();
    var firstNameFinal = firstNameFirst+firstNameLower.slice(1);
    return newName = firstNameFinal + ' ' +lastNameCaps;
}

$('#mapDiv').append(googleMap);
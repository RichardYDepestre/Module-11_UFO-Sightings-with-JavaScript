# UFOs
## Overview of Project:
This project is meant to offer a mean to mine data regarding UFO sightings and display them in a specific layout:
- Date, City, State, Country, Shape, Duration, and Comments.

Users, when interacting with the application, would enter their search requirements and submit their requests. The application must filter the raw data and present the results onto the main page.
The data set of UFO sightings had been provided to us.

## Analysis:
Using my knowledge of javascript, D3, internet resources I focused on delivering a simple code that meet the requirement for this project. It's been challenging and rewarding.
I have genuily attempted to structure the code in way to handle all possible interactions with a user. The section below shows how a user would interact with the application.

## Results:
How would a user interact with the application?
1) A user would use the label to input their search criteria.
2) S/he would the cues on the sreen to input criterion like date as in 'm/d/yyyy' or 'mm/dd/yyyy'.
3) S/he would be provided a list of shapes to key in, an inconvenience.
The section below presents a sample of results a user could expect from the application.
1) A user starts the application, the interface is to display all recorded UFO sightings [All sightings](https://github.com/RichardYDepestre/UFOs/blob/main/static/images/page-load_default.png) 
2) A user enters valid criteria for which there are no data. The appliction is to display a message that should read: "*** No data match your search criterion(a) ***". [No data found](https://github.com/RichardYDepestre/UFOs/blob/main/static/images/valid-criteria_no-data.png) \
  2.1) The same message would display should there be a type in one of the input fields [Type-No data](https://github.com/RichardYDepestre/UFOs/blob/main/static/images/typo_no-data.png)
3) Data results are tailored to the criteria entered [Partial criteria](https://github.com/RichardYDepestre/UFOs/blob/main/static/images/some-criteria.png)
4) Data results are refined when a user input all valid search criteria [Refined Data Result](https://github.com/RichardYDepestre/UFOs/blob/main/static/images/all-criteria_narrowed-lists.png)

##  Summary and Challenges:
The application as built would receive input, in suggested format, and mine the UFO sightings data and display the results. The application could benefit from an injection of 'intuitive' design concepts. Let's start with the data field. The use a calendar widget would present a user with pre-defined date formats and reduce input errors. Since the application is, for now, limited to the United States, the state field could be move up after the date field. This enable to preload states and cities therefore, offering quick choice and accurate naming of states and cities. The same approach could be use for the shape field.
Where woud the data to populate these fields?
The date widget is self-contained and would work as designed. The other fields would be populated from value in the dataset. Tbey could be bound to the appropriate fields dataset reducing data entry errors.
In my view the use of a submit button would make good design sense. The request of data has only one and known way: button-click, to be initiated.
Making the application a point-and-click one would significantly increase its ease of use and appeal.

## Conclusion:
This challenge helped me appreciate the possibilities of Web Development. It also highlighted the challenges that lay ahead as I foray into learning more of the web developmemnt tools. 

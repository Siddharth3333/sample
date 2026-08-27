var data = {
    "students": [
        {
            "id": 1,
            "name": "Rahul",
            "age": 20,
            "course": "Python",
            "marks": 85
        },
        {
            "id": 2,
            "name": "Priya",
            "age": 21,
            "course": "Java",
            "marks": 90
        },
        {
            "id": 3,
            "name": "Amit",
            "age": 19,
            "course": "HTML",
            "marks": 78
        },
        {
            "id": 4,
            "name": "Sneha",
            "age": 22,
            "course": "CSS",
            "marks": 88
        }
    ]
};

var output=`<div class="Student-card">
<h2>${data.students[0].name}</h2>
<p><b>Age: </b>${data.students[0].age}</p>
<p><b>Course: </b>${data.students[0].course}</p>
<p class="marks"> Marks: ${data.students[0].marks}</p>
</div>
`

document.getElementById("students").innerHTML=output

<?php

    function getAssignmentsByCourse($course_id) {
        global $db;

        if ($course_id) {
            $query = "SELECT A.ID, A.DESCRIPTION, C.courseName 
            FROM assignments A LEFT JOIN "
        } else {

        }
    }

        // print the hours, minutes, and seconds

        // 1hr = 60 minuntes
        //1hr = 3600 seconds
        //1min = 60 seconds
        //1sec = 1000 miliseconds

        const initialTimeInSeconds = 15619;


        const leftOverSeconds = initialTimeInSeconds % 3600;

        const evenHour = initialTimeInSeconds - leftOverSeconds;

        const hours = evenHour / 3600 ;

        leftOverSeconds2 = leftOverSeconds % 60;

        const evenMinutes = leftOverSeconds - leftOverSeconds2;

        const minutes = evenMinutes / 60;

        const seconds = leftOverSeconds2;

        console.log(hours + ":" + minutes + ":" + seconds)
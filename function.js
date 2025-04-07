import figlet from 'figlet';

export function stringg() {
    figlet("Hello World!!",
        {
            font: "Ghost"
        }
        , function (err, data) {
            if (err) {
                console.log("Errore");
                console.dir(err);
                return;
            }
            console.log(data);
        });
}


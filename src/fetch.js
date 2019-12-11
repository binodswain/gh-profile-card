import { profile_data, repo_data } from "./configs";

const getData = (url, type, user) => {
    return fetch(url)
        .then(function(response) {
            if (response.status !== 200) {
                // console.log(
                //     "Looks like there was a problem. Status Code: " +
                //         response.status
                // );
                return;
            }

            // Examine the text in the response
            return response.json().then(function(data) {
                if (type === "profile") {
                    let userdata = {};
                    profile_data.forEach((key) => {
                        userdata[key] = data[key];
                    });
                    return userdata;
                } else if (type === "repo") {
                    // console.log(data);
                    return data.map((repo) => {
                        let repodata = {};
                        repo_data.forEach((key) => {
                            repodata[key] = repo[key];
                        });

                        return repodata;
                    });
                }
            });
        })
        .catch(function(err) {
            // console.log("Fetch Error", err);
        });
};

export default getData;

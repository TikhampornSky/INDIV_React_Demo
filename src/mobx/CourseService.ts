//Creating a service for HTTP calls to the Web API (get, post, put and delete methods)

const webApiUrl = "http://country.local/api/Country";
class CourseService {
    get = async (urlParams: string) => {
        const options = {
            method: "GET",
        }
        const request = new Request(webApiUrl + "?" + urlParams, options);
        const response = await fetch(request);
        return response.json();
    }

    post = async (model:any) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify(model)
        }
        const request = new Request(webApiUrl, options);
        const response = await fetch(request);
        return response;
    }

    put = async (model:any) => {
        const headers = new Headers()
        headers.append("Content-Type", "application/json");
        var options = {
            method: "PUT",
            headers,
            body: JSON.stringify(model)
        }
        const request = new Request(webApiUrl, options);
        const response = await fetch(request);
        return response;
    }
    
    delete = async (id:number) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const options = {
            method: "DELETE",
            headers
        }
        const request = new Request(webApiUrl + "/" + id, options);
        const response = await fetch(request);
        return response;
    }
}
export default CourseService
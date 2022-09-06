import { observable, runInAction, makeObservable } from 'mobx';
import CourseService from './CourseService'

//create a Store and inject our service through Store’s constructor. 
//Store is a place where you keep your reusable logic and application’s UI state that will be used by your components.

/*
class CountryStore {
    CourseService
    constructor(){
        this.CourseService = new CourseService();
    }
    courseData = {
        model: [],
        pageNumber: 0,
        isAscending: false,
    };
    status = "initial";
    searchQuery = "";

    getCourseAsync = async () => {
        try {
            var params = {
                pageNumber: this.courseData.pageNumber,
                searchQuery: this.searchQuery,
                isAscending: this.courseData.isAscending
            };
            const urlParams = new URLSearchParams(Object.entries(params));
            const data = await this.CourseService.get(urlParams)
            runInAction(() => {
                this.courseData = data;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };
    createCourseAsync = async (model:any) => {
        try {
            const response = await this.CourseService.post(model);
            if (response.status === 201) {
                runInAction(() => {
                    this.status = "success";
                })
            } 
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }

    };
    updateCourseAsync = async (vehicle:string) => {
        try {
            const response = await this.CourseService.put(vehicle)
            if (response.status === 200) {
                runInAction(() => {
                    this.status = "success";
                })
            } 
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };
    deleteCourseAsync = async (id:number) => {
        try {
            const response = await this.CourseService.delete(id);
            if (response.status === 204) {
                runInAction(() => {
                    this.status = "success";
                })
            } 
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }
}

makeObservable(CountryStore, {
    courseData: observable,
    searchQuery: observable,
    status: observable
});

export default new CountryStore();
*/
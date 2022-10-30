import axois from "axios";

export const getTasks = () => {
    return axois.get("/api/tasks");
}

export const addTask = (data) => {
    return axois.post("/api/task", data);
}


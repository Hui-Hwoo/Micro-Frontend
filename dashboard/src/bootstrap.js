import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#_dashboard-dev-root");

    if (el) {
        mount(el);
    }
}

// We are running through container
export { mount };

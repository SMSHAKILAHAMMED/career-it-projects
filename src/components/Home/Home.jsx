import Banner from "../Banner/Banner";
import CatagoryLists from "../CategoryLists/CategoryLists";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CatagoryLists></CatagoryLists>
            <FeaturedJobs></FeaturedJobs>

            <h2>This is my home</h2>
        </div>
    );
};

export default Home;
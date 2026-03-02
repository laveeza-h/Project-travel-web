import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tour give you the opportunity to see alot,within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Hunza Valley, Hunza Nagar"
        text="Nestled in the heart of the Karakoram Range, the Hunza and Nagar
            valleys are a stunning blend of turquoise rivers, terraced orchards,
            and soaring 7,000-meter peaks. Separated by a river but united by
            breathtaking scenery, the region is famous for the ancient Baltit
            Fort, the vibrant Attabad Lake, and the legendary hospitality of its
            people. It is a high-altitude sanctuary where history and nature
            meet, offering some of the most spectacular mountain views on Earth."
        img1="https://images.unsplash.com/photo-1626440847069-d8073e1a0cca?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1638433100361-a385449453a2?q=80&w=407&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Kaghan,lake"
        text="The Kaghan Valley is a high-altitude Himalayan wonderland in Pakistan, world-renowned for its collection of crystalline alpine lakes (jheels). Stretching 155 km from the lush forests of Shogran to the icy heights of Babusar Top, the valley is defined by the roaring Kunhar River and its dramatic glacial landscapes. It serves as the country's premier summer retreat, offering a mix of accessible roadside beauty and remote, untouched wilderness for trekkers."
        img1="https://images.unsplash.com/photo-1565182027317-ca49ef1405f5?q=80&w=923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1605447609768-080cf92e09c5?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};
export default Destination;

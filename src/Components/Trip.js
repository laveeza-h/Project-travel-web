import "./TripStyles.css";
import TripData from "./TripData";
function Trip() {
  return (
    <div className="Trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using google maps.</p>
      <div className="tripcard">
        <TripData
          image={
            "https://images.unsplash.com/photo-1668061867899-02b4cfa34747?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          heading="Trip to Naran / kaghan"
          text="As of March 2026, Naran is a serene, snow-covered wonderland waking up from winter. The town is accessible, but the road to Babusar Top remains blocked by heavy glaciers. Lake Saif-ul-Malook is likely still frozen and reachable only by a 2-3 hour trek through the snow, as jeep tracks aren't cleared until May. It’s the perfect, quiet shoulder season for crisp mountain air and dramatic photography before the summer crowds arrive."
        />
        <TripData
          image={
            "https://plus.unsplash.com/premium_photo-1697729758639-d692c36557b2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          heading=" Trip to Fasisal Mosque"
          text="The Faisal Mosque is Pakistan’s iconic national mosque, famously nestled at the foot of the Margalla Hills in Islamabad. Designed by Turkish architect Vedat Dalokay, it breaks from tradition by ditching the typical dome for a striking, geometric shape inspired by a Bedouin tent."
        />
        <TripData
          image={
            "https://www.inheritage.foundation/_next/image?url=https%3A%2F%2Fhngypvvgdsafubblqcaq.supabase.co%2Fstorage%2Fv1%2Frender%2Fimage%2Fpublic%2Fheritage%2Fheritage-sites-v2%2Fpunjab%2Fkatas-raj-temples-chakwal-punjab%2F1762697532875_katas-raj-temples-chakwal-punjab-google-place-2.webp%3Fquality%3D75%26resize%3Dcover%26width%3D1920&w=1920&q=75"
          }
          heading="Trip to Katas Raj Temples"
          text="The Katas Raj Temples are an ancient Hindu complex near Chakwal, Punjab, centered around a sacred pond. Legend says the pool was created by the tears of Lord Shiva as he mourned his wife, Sati.The site is famously linked to the Mahabharata, believed to be where the Pandava brothers lived during their exile."
        />
      </div>
    </div>
  );
}
export default Trip;

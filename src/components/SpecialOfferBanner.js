export default function SpecialOfferBanner({ offer }) {
    if (!offer) return null;
    return (
      <div className="bg-yellow-500 text-black text-center py-2 font-semibold">
        {offer.title} - {offer.description} ({offer.discountPercent}% OFF)
      </div>
    );
  }
  
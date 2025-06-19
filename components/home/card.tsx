import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <section className="text-gray-600 body-font overflow-hidden w-full px-4 py-0 sm:py-20 lg:px-4">
      <div className="mx-auto flex flex-wrap border rounded-lg lg:bg-gradient-to-r from-40% via-sky-100 to-pink-50">
        <div className="lg:w-1/2 w-full p-20 items-center justify-center">
          <h3 className="text-xl md:text-3xl font-semibold mb-4 tracking-tight text-neutral-800 text-center">
            Perspective has 40+ new features 🥳
          </h3>
          <p className="text-neutral-400 text-sm text-center">
            Update on Funnels, Metrics, Contacts, Emails & more. All in one
            powerful growth platform!
          </p>
          <Link
            href="/services"
            className="flex flex-row text-xl text-blue-600 gap-2 items-center mt-4 justify-center py-4 font-semibold hover:bg-neutral-100 hover:rounded-lg"
          >
            <div className="button-icon w-embed">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 7.29289L8.70711 4.29289C8.31658 3.90237 7.68342 3.90237 7.29289 4.29289C6.90237 4.68342 6.90237 5.31658 7.29289 5.70711L8.58579 7L5 7C4.44772 7 4 7.44771 4 8C4 8.55228 4.44772 9 5 9H8.58579L7.29289 10.2929C6.90237 10.6834 6.90237 11.3166 7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071L11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div>Watch launch event</div>
          </Link>
        </div>
        <div className="lg:w-1/2 w-full lg:h-auto flex items-center justify-center">
          <Image
            alt="ecommerce"
            className=""
            src="https://cdn.prod.website-files.com/61ba09162b87002e87715b91/6738e97fd57d477447a64554_keynote-img.webp"
            width={400}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

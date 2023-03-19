import { createSignal, For, Show } from "solid-js";

interface RSVP {
  imageUrl: string
  firstName: string
  lastName: string
  blurb: string
  email: string
  cardColor: "" | "red" | "orange" | "yellow" | "lime" | "green"
  dietaryRestriction: "" | "None" | "Vegetarian" | "Vegan" | "GlutenFree" | "Other"
  dietaryRestrictionOther: string
  addToAttendees: boolean
}

export default function RSVP() {
  const [data, setData] = createSignal<RSVP>({
    firstName: "",
    lastName: "",
    blurb: "",
    email: "",
    imageUrl: "",
    cardColor: "",
    dietaryRestriction: "",
    dietaryRestrictionOther: "",
    addToAttendees: false
  });

  const updateFormField = (fieldName: keyof RSVP) => (event: Event) => {
    const inputElement = event.currentTarget as HTMLInputElement;
    setData({
      ...data(),
      [fieldName]: inputElement.value
    });
  };

  return (
    <div class="w-full min-h-full bg-secondary bg-opacity-40">
      <div class="p-20 flex flex-col justify-between text-center gap-8">
        <h1 class="flex-none text-4xl font-extrabold md:text-6xl">RSVP</h1>
        <div class="flex-none">
          <div class="flex flex-wrap justify-between">
            <input type="text" placeholder="First Name" class="input input-bordered w-full max-w-xs" value={data().firstName} onChange={updateFormField("firstName")} />
            <input type="text" placeholder="Last Name" class="input input-bordered w-full max-w-xs" value={data().lastName} onChange={updateFormField("lastName")} />
            <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" value={data().email} onChange={updateFormField("email")} />
          </div>
        </div>
        <div class="flex-none form-control">
          <div class="flex flex-wrap justify-between">
            <div class="dropdown dropdown-hover">
              <label tabindex="0" class="btn m-1">{data().dietaryRestriction === "" ? "Dietary Restriction" : data().dietaryRestriction}</label>
              <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>None</a></li>
                <li><a>Vegetarian</a></li>
                <li><a>Vegan</a></li>
                <li><a>Gluten-Free</a></li>
                <li><a>Other</a></li>
              </ul>
            </div>
            <Show when={data().dietaryRestriction === "Other"}>
              <input type="text" placeholder="Specify dietary restriction" class="m-5 input input-bordered w-full max-w-xs" value={data().dietaryRestrictionOther} onChange={updateFormField("dietaryRestrictionOther")} />
            </Show>
            <div class="flex-none">
              <label class="label cursor-pointer">
                <span class="label-text font-bold text-xl mr-5">Add me to the public attendees list (recommended!)</span>
                <input type="checkbox" class="checkbox checkbox-primary checkbox-lg" checked={data().addToAttendees} onChange={updateFormField("addToAttendees")} />
              </label>
            </div>
          </div>
        </div>
        <Show when={data().addToAttendees}>
          <div class="divider" />
          <div class="flex justify-around bg-base-300 rounded-box p-8">
            <div class="flex flex-col">
              <div>
                <label class="label">
                  <span class="label-text text-lg text-bold">Select a color for your card on the attendees page</span>
                </label>
                <div class="rating gap-1">
                  <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
                  <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" />
                  <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
                  <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" />
                  <input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
                </div>
              </div>
              <div>
                <label class="label">
                  <span class="label-text text-lg text-bold">Upload a photo of yourself for the attendees page</span>
                </label>
                <input type="file" class="file-input file-input-primary file-input-lg w-full max-w-xs" />
              </div>
            </div>
            <textarea class="flex-1 mx-5 textarea textarea-bordered text-lg" placeholder="Tell us how you know Rob & Haley!"></textarea>
          </div>
          <div class="divider" />
        </Show>
        <div class="flex-none">
          <button class="btn btn-primary btn-lg btn-wide">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
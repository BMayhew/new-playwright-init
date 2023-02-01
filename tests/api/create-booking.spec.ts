import { test, expect } from "@playwright/test";

test("Create a booking", async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
    }
  );
  const body = JSON.parse(await response.text());
  expect(response.status()).toBe(200);
  expect(body.bookingid).toBeGreaterThan(0);
  expect(body.booking.firstname).toBe("Jim");
  expect(body.booking.lastname).toBe("Brown");
  expect(body.booking.totalprice).toBe(111);
  expect(body.booking.depositpaid).toBe(true);
  expect(body.booking.bookingdates.checkin).toBe("2018-01-01");
  expect(body.booking.bookingdates.checkout).toBe("2019-01-01");
  expect(body.booking.additionalneeds).toBe("Breakfast");
  // console.log("here is the body", body);
});

const flashData = $(".flash-data").data("flashdata");
//console.log(flashData);

if (flashData) {
	Swal.fire("Confirmed", flashData, "success");
}

//berhasil login
const login = $(".berhasil-login").data("flashdata");
//console.log(flashData);

if (login) {
	Swal.fire({
		position: "center",
		icon: "success",
		title: "Success!",
		text: login,
		showConfirmButton: false,
		timer: 3000,
	});
}

//tombol hapus
$(".tombol-hapus").on("click", function (e) {
	e.preventDefault();
	const form = $(this).parents("form");
	Swal.fire({
		title: "Confirmed",
		text: "Want to delete this data?",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, Delete",
		cancelButtonText: "No",
	}).then((result) => {
		if (result.value) {
			form.submit();
			loadItem();
		}
	});
});

//tombol hapus
$(".hapus-link").on("click", function (e) {
	e.preventDefault();
	const href = $(this).attr("href");
	Swal.fire({
		title: "Confirmed",
		text: "Want to delete this data?",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, Delete",
		cancelButtonText: "No",
	}).then((result) => {
		if (result.value) {
			document.location.href = href;
		}
	});
});

//Logout
$(".tombol-logout").on("click", function (e) {
	e.preventDefault();
	const href = $(this).attr("href");

	Swal.fire({
		title: "Confirmed",
		text: "Anda ingin keluar?",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Keluar",
		cancelButtonText: "Batal",
	}).then((result) => {
		if (result.value) {
			document.location.href = href;
		}
	});
});

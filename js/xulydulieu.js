$(document).ready(function () {
    var i = 2;
    $("#dk").click(function () {
        $("#mymodal").modal();
    });

    function kiemtraten() {
        var i = 1;
        let maukt = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#txtName").val() == "") {
            $("#tbName").html("Không được bỏ trống");
            return false;
        }
        if (!maukt.test($("#txtName").val())) {
            $("#tbName").html("Ký tự đầu viết hoa, không dùng số");
            return false;

        }
        $("#tbName").html("*");
        return true;
    }
    $("#txtName").blur(kiemtraten);


    function kiemtraao() {

        let maukt = /^\d*$/;
        if ($("#txtAo").val() == "") {
            $("#tbAo").html("Không được bỏ trống");
            return false;
        }
        if (!maukt.test($("#txtAo").val())) {
            $("#tbAo").html(" Dùng số 1 đến 100");
            return false;

        }
        else {
            var soAo = $("#txtAo").val();
            if (soAo < 1 || soAo > 100) {
                $("#tbAo").html("Nhâp từ 1 đến 100");
            } else {
                $("#tbAo").html("*");
                return true;
            }
        }

    }
    $("#txtAo").blur(kiemtraao);



    function kiemtraclb() {
        var i = 1;
        let maukt = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#txtCLB").val() == "") {
            $("#tbCLB").html("Không được bỏ trống");
            return false;
        }
        if (!maukt.test($("#txtCLB").val())) {
            $("#tbCLB").html("Ký tự đầu viết hoa, không dùng số");
            return false;

        }
        $("#tbCLB").html("*");
        return true;
    }
    $("#txtCLB").blur(kiemtraclb);


    function kiemtrangay() {
        var i = 1;
        let maukt = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#txtCLB").val() == "") {
            $("#tbCLB").html("Không được bỏ trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#txtNgay").val());
        today = today.setDate(today.getDate() + 7);
        if (today > ntt) {
            $("#tbNgay").html("Phải nhập sau 7 ngày ");
            return false;
        }
        $("#tbNgay").html("*");
        return true;
    }
    $("#txtNgay").blur(kiemtrangay);


    function kiemtrasdt() {
        var i = 1;
        let maukt = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#txtSDT").val() == "") {
            $("#tbSDT").html("Không được bỏ trống");
            return false;
        }
        if (!maukt.test($("#txtSDT").val())) {
            $("#tbSDT").html("Nhập lại sdt");
            return false;

        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#txtSDT").blur(kiemtrasdt);



    $("#Save").click(function () {

        if (kiemtraten() == true && kiemtraao() == true && kiemtraclb() == true & kiemtrangay() == true & kiemtrasdt() == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#txtName").val() + "</th>";
            row += "<th>" + $("#txtAo").val() + "</th>";
            row += "<th>" + $("#txtCLB").val() + "</th>";
            row += "<th>" + $("#txtNgay").val() + "</th>";
            row += "<th>" + $("#txtSDT").val() + "</th>";
            row += "<th>" + anh + "</th>";

            $("#danhsach").append(row);
            $("#mymodal").modal("hide");
        }


    });

});
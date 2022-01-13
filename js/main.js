places = [
    //standard chess piecec naming
    ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
]
arrangement = [
    // place_id,    color,  type,   num,    img_file

    ['a1', 0, 'rook', 'rook-w.svg'],
    ['b1', 0, 'knight', 'knight-w.svg'],
    ['c1', 0, 'bishop', 'bishop-w.svg'],
    ['d1', 0, 'queen', 'queen-w.svg'],
    ['e1', 0, 'king', 'king-w.svg'],
    ['f1', 0, 'bishop', 'bishop-w.svg'],
    ['g1', 0, 'knight', 'knight-w.svg'],
    ['h1', 0, 'rook', 'rook-w.svg'],

    ['a2', 0, 'pawn', 'pawn-w.svg'],
    ['b2', 0, 'pawn', 'pawn-w.svg'],
    ['c2', 0, 'pawn', 'pawn-w.svg'],
    ['d2', 0, 'pawn', 'pawn-w.svg'],
    ['e2', 0, 'pawn', 'pawn-w.svg'],
    ['f2', 0, 'pawn', 'pawn-w.svg'],
    ['g2', 0, 'pawn', 'pawn-w.svg'],
    ['h2', 0, 'pawn', 'pawn-w.svg'],

    ['a8', 1, 'rook', 'rook-b.svg'],
    ['b8', 1, 'knight', 'knight-b.svg'],
    ['c8', 1, 'bishop', 'bishop-b.svg'],
    ['d8', 1, 'queen', 'queen-b.svg'],
    ['e8', 1, 'king', 'king-b.svg'],
    ['f8', 1, 'bishop', 'bishop-b.svg'],
    ['g8', 1, 'knight', 'knight-b.svg'],
    ['h8', 1, 'rook', 'rook-b.svg'],

    ['a7', 1, 'pawn', 'pawn-b.svg'],
    ['b7', 1, 'pawn', 'pawn-b.svg'],
    ['c7', 1, 'pawn', 'pawn-b.svg'],
    ['d7', 1, 'pawn', 'pawn-b.svg'],
    ['e7', 1, 'pawn', 'pawn-b.svg'],
    ['f7', 1, 'pawn', 'pawn-b.svg'],
    ['g7', 1, 'pawn', 'pawn-b.svg'],
    ['h7', 1, 'pawn', 'pawn-b.svg'],
]

function pixel_from_place_name(place_name) {
    for (let i = 0; i < 8; i++)
        for (let j = 0; j < 8; j++)
            if (place_name == places[i][j])
                return [j * 100, i * 100];
}

function rearrange() {
    document.getElementById("board").innerHTML = "";


    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {

            document.getElementById("board").innerHTML += '<div onclick="square_clicked(\'' + places[j][i] + '\')" class="square" style="top:' + (j * 100) + 'px; left:' + (i * 100) + 'px" ></div>';
        }
    }

    arrangement.forEach((element, i) => {
        let place_id = element[0];
        let color = element[1];
        let type = element[2];
        let img_file = element[3];
        let x = pixel_from_place_name(place_id)[0];
        let y = pixel_from_place_name(place_id)[1];

        document.getElementById("board").innerHTML += '<div id="' + i + '" onclick="piece_clicked(' + i + ')" class="piece" style="background-image:url(\'img/' + img_file + '\'); top: ' + y + 'px; left: ' + x + 'px"></div>';

    });


}

function arrangement(place_id) {
    document.getElementById("board").innerHTML = "";

}

function move(places) {
    current_place = pixel_from_place_name(places);

}

function deselect(piece_id) {
    document.getElementById(piece_id).style.backgroundColor = 'transparent';
    selected_piece = -1;
}

function square_clicked(place_id) {
    current_place = pixel_from_place_name(place_id);
    new_y = String(current_place[0]);
    new_x = String(current_place[1]);
    move(selected_piece, new_x, new_y);
    deselect(selected_piece);
}

function hazf(piece) {
    document.getElementById(piece).style.display = 'none';
}

function move(piece, x, y) {
    document.getElementById(piece).style.top = x + 'px';
    document.getElementById(piece).style.left = y + 'px';

}

selected_piece = -1;

function piece_clicked(piece_new) {
    // ببینم اصلا مهره‌هه چیه
    piece = arrangement[piece_new];


    if (piece_new == selected_piece) {
        deselect(selected_piece);
    } else if (selected_piece != -1) {
        new_place = pixel_from_place_name(piece[0]);

        hazf(piece_new);

        move(selected_piece, new_place[1], new_place[0]);

        deselect(selected_piece);
    } else {
        // تعیین مهره به عنوان مهره‌ی انتخاب شده
        selected_piece = piece_new;

        // رنگ مهره‌ی انتخاب شده تغییر کند
        document.getElementById(piece_new).style.backgroundColor = 'orange';
    }
}


rearrange();
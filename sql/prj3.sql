CREATE TABLE board
(
    id          INT AUTO_INCREMENT NOT NULL,
    title       VARCHAR(10)        NOT NULL,
    content     VARCHAR(10000)     NOT NULL,
    author      VARCHAR(8)         NOT NULL,
    inserted_at datetime           NOT NULL DEFAULT NOW(),
    CONSTRAINT pk_board PRIMARY KEY (id)
);

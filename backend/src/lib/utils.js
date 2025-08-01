import jwt from "jsonwebtoken";

export const generateToken = (userData, res) => {
    const token = jwt.sign(userData, process.env.JWT_SECRET || "", {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return token;
};

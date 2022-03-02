function generateRandomColour()
{
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}

module.exports = generateRandomColour();
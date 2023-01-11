export const generateTable = (
    ratingOverall: number | null,
    ratingStory: number | null,
    ratingGameplay: number | null,
    ratingGraphics: number | null,
    ratingSound: number | null,
    ratingReplay: number | null,
    ratingDifficulty: number | null,
    ratingBugs: number | null,
    ratingRequirements: number | null,
    ratingLength: number | number[]
  ) => {
    return `
      [hr][/hr]
      [table]
      [tr]
      [th]Category[/th]
      [th]Score[/th]
      [/tr]
      [tr]
      [td]🏆 Overall Rating[/td]
      [td]${drawStars(ratingOverall)}[/td]
      [/tr]
      [tr]
      [td]📖 Story[/td]
      [td]${drawStars(ratingStory)}[/td]
      [/tr]
      [tr]
      [td]🎮 Gameplay[/td]
      [td]${drawStars(ratingGameplay)}[/td]
      [/tr]
      [tr]
      [td]🎨 Graphics[/td]
      [td]${drawStars(ratingGraphics)}[/td]
      [/tr]
      [tr]
      [td]🎵 Sound Design[/td]
      [td]${drawStars(ratingSound)}[/td]
      [/tr]
      [tr]
      [td]↩️ Replay Value[/td]
      [td]${drawStars(ratingReplay)}[/td]
      [/tr]
      [tr]
      [td]😧 Difficulty[/td]
      [td]${drawStars(ratingDifficulty)}[/td]
      [/tr]
      [tr]
      [td]🐛 Bug free?[/td]
      [td]${drawStars(ratingBugs)}[/td]
      [/tr]
      [tr]
      [td]🖥️ PC Requirements[/td]
      [td]${drawStars(ratingRequirements)}[/td]
      [/tr]
      [tr]
      [td]📈 Game Length[/td]
      [td]${drawProgress(ratingLength)}
      [/td]
      [/tr]
      [/table]

        Create your own review table right here: https://bettergamereviews.com/ 
        🎮 Happy gaming! 🎮

      [hr][/hr]
      `;
  };

  const drawStars = (stars: number | null) => {
    let starString = "";
    if (stars != null) {
      starString += "★".repeat(stars) + "☆".repeat(5 - stars);
    } else {
      starString = "☆".repeat(5);
    }
    return starString;
  };
  
  const drawProgress = (progress: number | number[]) => {
    let progressString = ``;
    if (typeof progress == "number") {
      progress = progress / 10;
      progressString += `▰`.repeat(progress) + `▱`.repeat(10 - progress);
    } else {
      progressString = `▱`.repeat(10)
    }
    return progressString;
  };
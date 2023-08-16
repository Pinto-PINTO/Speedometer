function createSpeedometer(elementId, config = {}) {
    const defaultConfig = {
        showFundamental: true,
        showValues: true, // Option to show numeric values below the labels
        fundamentalText: 'Fundamental Analysis for',
        fundamentalSymbol: '',
        sellValue: 0,
        buyValue: 0,
        neutralValue: 0,
    };
    // Merge the provided config with the default config
    config = { ...defaultConfig, ...config };

    const speedometerContainer = document.querySelector(elementId);
    speedometerContainer.innerHTML = `
    <div class="speedometer text-center">
      ${config.showFundamental
            ? `<h5 class="title">${config.fundamentalText} <span class="text-primary">${config.fundamentalSymbol}</span></h5>`
            : ''
        }

      <div class="speedometer-ranges"></div>

      <div class="speedometer-background" id="speedometer-background">
          <div class="speedometer-center"></div>
      </div>

      <div class="speedometer-background-hide pt-4">
          <h1 class="status-txt fw-bold" id="status-txt">Neutral</h1>
      </div>

      <div class="speedometer-needle"></div>

      <div class="range-text range-text-1">Strong<br />Sell</div>
      <div class="range-text range-text-2">Sell</div>
      <div class="range-text range-text-3">Neutral</div>
      <div class="range-text range-text-4">Buy</div>
      <div class="range-text range-text-5">Strong<br />Buy</div>
      ${config.showValues
            ? `
          <div class="value-text-row">
            <div class="value-text value-sell">${config.sellValue}<br>Sell</div>
            <div class="value-text value-neutral">${config.neutralValue}<br>Neutral</div>
            <div class="value-text value-buy">${config.buyValue}<br>Buy</div>
          </div>
        `
            : ''
        }
      
    </div>
  `;

    const speedometerNeedle = speedometerContainer.querySelector('.speedometer-needle');
    const statusText = speedometerContainer.querySelector('.status-txt');
    const background = speedometerContainer.querySelector('.speedometer-background');

    function setSpeedometerValue(degrees, status, bgColor) {
        speedometerNeedle.style.transform = `rotate(${degrees}deg) translateX(-50%)`;
        statusText.innerHTML = status;
        statusText.style.color = bgColor;
        background.style.backgroundImage = `radial-gradient(${bgColor}00, ${bgColor}1c, ${bgColor}5b)`;
    }

    function calculateNeedleValue(sellValue, buyValue, neutralValue) {
        const totalValues = sellValue + buyValue + neutralValue;

        const sellWeight = sellValue / totalValues;
        const neutralWeight = neutralValue / totalValues;

        const weightedValue = sellWeight * -1 + neutralWeight * 0 + (1 - sellWeight - neutralWeight) * 1;

        if (weightedValue <= -2 / 3) {
            return -2;
        } else if (weightedValue <= -1 / 3) {
            return -1;
        } else if (weightedValue <= 1 / 3) {
            return 0;
        } else if (weightedValue <= 2 / 3) {
            return 1;
        } else {
            return 2;
        }
    }

    const needleValue = calculateNeedleValue(config.sellValue, config.buyValue, config.neutralValue);
    let degrees;
    let status;
    let bgColor;

    if (needleValue === -2) {
        degrees = -72;
        status = 'Strong Sell';
        bgColor = '#f44336';
    } else if (needleValue === -1) {
        degrees = -36;
        status = 'Sell';
        bgColor = '#d33a2f';
    } else if (needleValue === 0) {
        degrees = 0;
        status = 'Neutral';
        bgColor = '#787B86';
    } else if (needleValue === 1) {
        degrees = 36;
        status = 'Buy';
        bgColor = '#2457e6';
    } else if (needleValue === 2) {
        degrees = 72;
        status = 'Strong Buy';
        bgColor = '#2962ff';
    }

    setSpeedometerValue(degrees, status, bgColor);

    return {
        // No need to expose setScore, as the score is set automatically
    };
}
